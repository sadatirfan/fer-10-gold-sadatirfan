import { SearchResult } from "../../components/SearchResult";
import { Backdrop, Footer, Hero } from "../../components";

export const Result = () => {
  return (
    <>
      <Backdrop triggerClass="search-input" />
      <Hero withRentButton={false} withSearchForm withHeroContent={false} />
      <SearchResult />
      <Footer />
    </>
  );
};
