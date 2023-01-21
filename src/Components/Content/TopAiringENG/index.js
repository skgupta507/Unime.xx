import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "./topairing.css"
import { Pagination } from "swiper"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

function TopAiringENG({ topAiring, loadingAiring }) {
	return (
		<div>
			<h1 className="font-black ml-6 mr-6 text-amber-200">TOP AIRING</h1>
			{loadingAiring ? (
				<SkeletonTheme baseColor="#202020" highlightColor="#444">
					<Skeleton className="h-[500px] w-full " />
				</SkeletonTheme>
			) : (
				<Swiper
					direction={"vertical"}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="top-airing-swiper h-[500px] w-full"
					slidesPerView={1}
				>
					{topAiring.map((item, i) => (
						<SwiperSlide key={i}>
							<div
								style={{ backgroundImage: `url(${item.anilist.cover})` }}
								className={`bg-cover bg-center h-full w-full bg-no-repeat rounded`}
							>
								<div className="banner__overlay h-full w-full flex items-center">
									<div className="w-2/5 max-sm:w-full ml-[40px] max-sm:mx-0 max-sm:px-[30px] flex flex-col justify-center h-100">
										<h2
											className="airing-info-main-title line-clamp-3 uppercase font-bold text-3xl"
											style={{
												color: `${
													item.anilist?.color ? item.anilist.color : `#fff`
												}`,
											}}
											title={item.title}
										>
											{item.title}
										</h2>
										<div className="airing-info-genres my-[20px]">
											{item.anilist.genres.map((genre, i) => (
												<div
													className="genre inline p-[4px] m-[4px] first:ml-0 rounded text-gray-50"
													key={i}
												>
													{genre}
												</div>
											))}
										</div>
										<div
											className="airing-info-description line-clamp-5 font-semibold text-base	"
											style={{ color: `#fff` }}
											dangerouslySetInnerHTML={{
												__html: item.anilist.description.replace(
													/<[br]+>/g,
													""
												),
											}}
										></div>
										<div className="airing-info-status text-gray-50 mt-[20px]">
											STATUS:{" "}
											<span className="rounded p-[4px] mt-[4px]">
												{item.anilist.status}
											</span>
										</div>
									</div>
									<div className="overlay__trigger w-3/5 h-fit flex justify-center items-center">
										<FontAwesomeIcon
											icon={faPlayCircle}
											className="w-16 h-16 rounded-full border-neutral-100 border-2 p-[1%] hover:border-transparent duration-200 ease-linear hover:text-orange-800 cursor-pointer"
										/>
									</div>
								</div>
							</div>
							<div className="airing-info"></div>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</div>
	)
}

export default TopAiringENG
