import Container from "../components/Container";
import NavbarNoAuth from "../components/NavbarNoAuth";

const NoPageNoAuth = () => {
  return (
    <>
      <div>
        <NavbarNoAuth></NavbarNoAuth>
      </div>
      <div className="main">
        <Container>
          <div>
            <span className="text-6xl">404</span>

            <p>Page not found! (No Auth)</p>

          </div>
        </Container>
      </div>
    </>
  );
};

export default NoPageNoAuth;