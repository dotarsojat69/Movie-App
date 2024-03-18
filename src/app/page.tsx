import { CarouselItem } from "@/components/ui/carousel";
import MovieCard from "@/components/movie-card";
import Carousel from "@/components/carousel";
import Heading from "@/components/heading";

import {
  getDetailMovie,
  getNowPlaying,
  getPopularMovies,
  getTopRated,
  getUpcoming,
} from "@/utils/actions/movies";


export default async function Page() {
  const popular = await getPopularMovies();
  const nowPlaying = await getNowPlaying();
  const topRated = await getTopRated();
  const upcoming = await getUpcoming();


  return (
    <>
    <div className="hero min-h-[50vh] bg-no-repeat lg:bg-top"
        style={{
          backgroundImage: topRated?.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original${topRated?.backdrop_path})`
            : `url("https://via.placeholder.com/1000x800?text=No+Image")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50>"></div>
      </div>
      <Heading title="Upcoming" />
      <div className="w-full relative flex justify-center">
        <Carousel>
          {upcoming.results.map((movie) => (
            <CarouselItem
              className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              key={movie.id}
            >
              <MovieCard {...movie} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
      <Heading title="Top Rated" />
      <Carousel>
        {topRated.results.map((movie) => (
          <CarouselItem
            className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            key={movie.id}
          >
            <MovieCard {...movie} />
          </CarouselItem>
        ))}
      </Carousel>
      <Heading title="Hot Takes" />
      <Carousel>
        {popular.results.map((movie) => (
          <CarouselItem
            className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            key={movie.id}
          >
            <MovieCard {...movie} />
          </CarouselItem>
        ))}
      </Carousel>
      <Heading title="Now Playing" />
      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {nowPlaying.results.map((movie) => (
          <MovieCard key={movie.id} {...movie} gridDisplay />
        ))}
      </div>
    </>
  );
}
