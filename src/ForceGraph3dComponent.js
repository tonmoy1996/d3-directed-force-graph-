import React from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import SpriteText from 'three-spritetext';

const ForceGraph3dComponent=(data)=>{

    return(
        <ForceGraph3D
            graphData={data.data}
            nodeLabel="id"
            nodeVal={20}
            linkOpacity={1}
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
            // nodeThreeObject={node => {
            //     const sprite = new SpriteText(node.id);
            //     // sprite.color = node.color;
            //     sprite.textHeight = 8;
            //     return sprite;
            // }}
        />

    );
}
export default ForceGraph3dComponent;