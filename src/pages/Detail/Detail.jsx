import { Footer, Hero, SearchForm } from "../../components";
import { SearchDetail } from "../../components/SearchDetail";

export const Detail = () => {
  return (
    <div>
      <Hero withRentButton={false} withSearchForm withHeroContent={false} />
      <SearchForm />
      <SearchDetail />
      <Footer />
    </div>
  );
};
