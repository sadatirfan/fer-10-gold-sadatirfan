import { Backdrop, Hero, Footer } from "../../components";
//search page
export const Search = () => {
  return (
    <>
      <Backdrop triggerClass="search-input" />
      <Hero withRentButton={false} withSearchForm />
      <Footer />
    </>
  );
};
