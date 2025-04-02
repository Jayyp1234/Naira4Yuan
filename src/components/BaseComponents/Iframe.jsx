import React from "react";

export default function Iframe({ srcLink = "" }) {
	return (
		<>
			<div className="h-[240px] rounded-2xl overflow-hidden">
				<iframe
					className="h-full w-full border-0"
					src={srcLink}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen></iframe>
			</div>
		</>
	);
}
