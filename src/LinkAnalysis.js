import React, {useCallback, useEffect, useState} from 'react';
import ForceGraph2D from 'react-force-graph-2d';

import {forceCollide} from "d3-force-3d";

const FORCE_MANYBODIES_STRENGTH = -20;
const FORCE_COLLIDE_RADIUS = 60;


const applyGraphForces = (graphRef, linkDistance) => {
    //$FlowIssue
    graphRef.current
        .d3Force("link")
        .iterations(2)
        .distance(50);

    //$FlowIssue
    graphRef.current
        .d3Force("charge")
        .strength(FORCE_MANYBODIES_STRENGTH)
        .distanceMin(FORCE_MANYBODIES_STRENGTH)
        .distanceMax(FORCE_MANYBODIES_STRENGTH);
    //$FlowIssue
    graphRef.current.d3Force("collision", forceCollide(FORCE_COLLIDE_RADIUS)
        .strength(0.1)
        .iterations(2));

    graphRef.current.d3ReheatSimulation();
};

const LinkAnalysis = (data) => {
    const graphRef = React.useRef(null);
    const [highlightNodes, setHighlightNodes] = useState(new Set());
    const [highlightLinks, setHighlightLinks] = useState(new Set());
    const [hoverNode, setHoverNode] = useState(null);

    const updateHighlight = () => {
        setHighlightNodes(highlightNodes);
        setHighlightLinks(highlightLinks);
    };

    const handleNodeHover = node => {
        highlightNodes.clear();
        highlightLinks.clear();
        if (node) {
            highlightNodes.add(node);
            data.data.links.forEach(link => {
                if (link.target.id === node.id) {
                    highlightLinks.add(link)
                }
            });
        }

        setHoverNode(node || null);
        updateHighlight();
    };

    const handleLinkHover = link => {
        highlightNodes.clear();
        highlightLinks.clear();

        if (link) {
            highlightLinks.add(link);
            highlightNodes.add(link.source);
            highlightNodes.add(link.target);
        }
        updateHighlight();
    };

    const paintRing = useCallback((node, ctx) => {
        // add ring just for highlighted nodes
        ctx.beginPath();
        ctx.arc(node.x, node.y, 12, 0, 2 * Math.PI, false);
        ctx.fillStyle = node === hoverNode ? 'green' : 'orange';
        ctx.fill();
    }, [hoverNode]);


    useEffect(() => {
        if (graphRef.current) {
            console.log("Change link distance!");
            applyGraphForces(graphRef, 100);
        }
    }, []);
    return (<ForceGraph2D
        ref={graphRef}
        width={window.innerWidth}
        height={800}
        graphData={data.data}
        nodeLabel="id"
        nodeVal={20}
        linkOpacity={1}
        linkWidth={5}
        linkDirectionalArrowLength={10}
        linkDirectionalArrowRelPos={1.5}
        nodeDesc={"id"}
        nodeAutoColorBy="id"
        linkColor={() => 'gray'}
        dagLevelDistance={200}
        linkDirectionalParticleSpeed={d => d.duration * 0.001}
        cooldownTicks={60}
        onNodeDragEnd={node => {
            node.fx = node.x;
            node.fy = node.y;
            node.fz = node.z;
        }}
        linkDirectionalParticles={4}
        linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 4 : 0}
        nodeCanvasObjectMode={node => highlightNodes.has(node) ? 'before' : undefined}
        nodeCanvasObject={paintRing}
        onNodeHover={handleNodeHover}
        onLinkHover={handleLinkHover}
        linkWidth={link => highlightLinks.has(link) ? 5 : 1}

    />);
}
export default LinkAnalysis;