import React from "react";

import HomeHeader from "./HomeHeader";

const MainLayout = ({ homeHeader }) => {
    return (
        <div>
            {homeHeader && <HomeHeader />}
        </div>
    );
};

export default MainLayout;