import React from 'react';
import ForceGraph3D from 'react-force-graph-3d';

const ForceGraph3dComponent=(data)=>{

    return(
        <ForceGraph3D
            graphData={data.data}
            nodeAutoColorBy={'id'}
            linkColor={() => 'gray'}
            linkWidth={2}
        />

    );
}
export default ForceGraph3dComponent;