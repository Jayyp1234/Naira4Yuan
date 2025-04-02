import React from "react";
import MapboxComponent from "./LocationChart";
export default function Graph() {
    return (
        <div className="v-layer-wrapper !bg-[var(--common-faint-bg)]">
            <h1 style={{textAlign:'center', fontSize:30, fontWeight:900}}>Mapbox Location Picker</h1>
            <MapboxComponent />
        </div>
    );
}
