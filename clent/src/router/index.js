import React from 'react';
import RouterMap from '@/router/map';
import Routes from '@/router/routes';

function RouterView(props) {
    const routes = props.routes ? props.routes : Routes;
    return <RouterMap {...props} routes={routes} ></RouterMap>
}

export default RouterView;