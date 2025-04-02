import React from "react";

export const FloatingItem = ({ src, cn = "" }) => {
	return (
		<figure className={`absolute pointer-events-none select-none ${cn}`}>
			<img src={src} alt="" className="h-auto max-w-full" />
		</figure>
	);
};
