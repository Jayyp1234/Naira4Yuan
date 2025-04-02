import { avatar1, avatar2, avatar3, avatar4, Star, whiteStar } from "@/data";
import { CompanyLogos } from "../../data/dataArray";
import { Link } from "react-router";

export const UsersStack = () => {
	return (
		<ul className="v-user-count">
			<span className="v-each">
				<img src={avatar1} alt={avatar1} className="img-fluid" />
			</span>
			<span className="v-each">
				<img src={avatar2} alt={avatar2} className="img-fluid" />
			</span>
			<span className="v-each">
				<img src={avatar3} alt={avatar3} className="img-fluid" />
			</span>
			<span className="v-each">
				<img src={avatar4} alt={avatar4} className="img-fluid" />
			</span>
			<span className="v-each">
				<span>100k</span>
			</span>
		</ul>
	);
};

export const CompanyImageStacks = () => {
	return (
		<div className="flex flex-col gap-x-4 my-10 lg:gap-x-10 lg:w-11/12 xl:w-9/12 md:mx-auto md:flex-row items-start lg:items-center lg:justify-center xl:justify-between">
			<span className="text-balance font-semibold text-lg">
				Naira4yuan is <br className="hidden lg:block" /> Featured on
			</span>
			<div role="presentation" className="flex flex-wrap flex-grow justify-evenly lg:justify-center xl:justify-between mt-5 md:mt-0 gap-5">
				{CompanyLogos.map((company, index) => (
					<Link key={index} className="sm:last:-mt-4 flex items-center justify-center" title={company.name}>
						<figure className="w-28 sm:w-32">
							<img src={company.logo} alt={company.logo} className="h-auto max-w-full" />
						</figure>
					</Link>
				))}
			</div>
		</div>
	);
};

export const RatingStacks = ({ length = 5 }) => {
	return (
		<div className="flex items-center gap-x-1">
			{Array.from({ length: length }).map((_, i) => (
				<figure key={i} className="flex items-center justify-center rounded-[2px] bg-green-600 p-1">
					<img src={Star} alt={Star} className="w-4" />
				</figure>
			))}
		</div>
	);
};
