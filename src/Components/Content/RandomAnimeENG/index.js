import React from "react"
import "swiper/css"
import "swiper/css/pagination"
import "./movieanime.css"
import { Link } from "react-router-dom"

function RandomAnimeENG({ randomAnime, loadingRandomAnime }) {
	return (
		<div>
			{loadingRandomAnime ? (
				""
			) : (
				<>
					<h1 className="font-black ml-6 mr-6 mt-2 border-b-4 border-white text-rose-500">
						YOU MIGHT LIKE?
					</h1>
					<div className="random-anime-container px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-36 w-full pb-12 flex max-lg:flex-col">
						<div className="w-1/5 flex justify-center max-lg:w-full">
							<Link
								className="cursor-pointer hover:opacity-80 duration-200 ease-in-out flex justify-center items-center"
								to={`/eng/info/${randomAnime.id}`}
							>
								<img
									className="w-[240px] h-[340px] object-cover"
									src={randomAnime.image}
									alt=""
								/>
							</Link>
						</div>
						<div className="w-4/5 max-lg:w-full">
							<div>
								<h2
									className="font-bold max-lg:text-center max-lg:mt-[6px]"
									style={{ color: `${randomAnime?.color || "#fff"}` }}
								>
									{randomAnime.title.english ||
										randomAnime.title.romaji ||
										randomAnime.title.native}
								</h2>
							</div>
							<div className="flex flex-row flex-wrap max-lg:justify-center">
								{randomAnime.genres.map((genre) => (
									<div className="" key={genre}>
										<p className="m-[6px] p-[6px] bg-[#5f5f5f29] rounded">
											{genre}
										</p>
									</div>
								))}
							</div>
							<div
								className="mx-[20px] max-lg:text-center"
								dangerouslySetInnerHTML={{
									__html: randomAnime.description?.replace(/<[br]+>/g, ""),
								}}
							></div>
							<div></div>
							<div className="flex lg:flex-row [&>*]:p-[6px] [&>*]:m-[4px] max-lg:flex-col">
								<div className="flex flex-col items-center">
									<h6 className="m-0 font-semi-bold bg-[#ff420e] text-[#282828] p-[6px] rounded">
										TYPE
									</h6>
									<p className="my-0">{randomAnime.type}</p>
								</div>
								<div className="flex flex-col items-center">
									<h6 className="m-0 font-semi-bold bg-[#f98866] text-[#282828] p-[6px] rounded">
										COUNTRY
									</h6>
									<p className="my-0">{randomAnime.countryOfOrigin}</p>
								</div>
								<div className="flex flex-col items-center">
									<h6 className="m-0 font-semi-bold bg-[#80bd9e] text-[#282828] p-[6px] rounded">
										DURATION
									</h6>
									<p className="my-0">{randomAnime.duration}</p>
								</div>
								<div className="flex flex-col items-center">
									<h6 className="m-0 font-semi-bold bg-[#89da59] text-[#282828] p-[6px] rounded">
										VOICE
									</h6>
									<p className="my-0 uppercase">{randomAnime.subOrDub}</p>
								</div>
							</div>
							<div className="mx-[12px] my-[14px] max-lg:text-center">
								<Link
									className="cursor-pointer hover:opacity-80 duration-200 ease-in-out p-[10px] bg-[#FF6E31] hover:text-[#1A120B] rounded"
									to={`/eng/info/${randomAnime.id}`}
								>
									<button>PLAY NOW</button>
								</Link>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default RandomAnimeENG
