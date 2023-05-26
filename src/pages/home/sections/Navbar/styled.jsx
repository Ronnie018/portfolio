import styled from 'styled-components';
const StNavbar = styled.div`
  background-color: #01758e;
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  justify-content: center;
  flex: 1 1 500px;

  @media (max-width: 460px) {
    padding: 0 0.5rem;
    height: 60px;
  }
  .container {
    flex: 1 1 500px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1200px;
    row-gap: 1.2rem;
    padding: 0 2rem;
    position: relative;
    z-index: 999;
    .hamb-menu-btn {
      background-color: #009bb0;
      width: 70px;
      height: 70px;
      display: none;
    }

    .logo-container {
      flex: 1 1 180px;
      font-weight: 500;
      font-size: 1.6rem;
      a {
        color: #ededed;
        animation: 200ms color reverse cubic-bezier(0.175, 0.885, 0.32, 1.275);
        &:hover {
          animation: 200ms colorchange;
          background-color: #ffffff;
          color: black;
        }
      }

      @media (max-width: 666px) {
        display: grid;
        place-items: center;
      }
    }

    @media (max-width: 460px) {
      padding: 0;
      column-gap: 1rem;
      .hamb-menu-btn {
        display: initial;
        width: 3.1rem;
        height: 3.1rem;
      }
      .logo-container {
        display: initial;
      }
    }
    nav {
      flex: 1 1 400px;

      @media (max-width: 460px) {
        position: absolute;
        top: 3.8rem;
        left: 0;
        background-color: #01758e;
        display: none;
        padding: 1rem;
        &.show {
          display: block;
          ul {
            display: flex;
            flex-direction: column;
            li {
              display: block;
            }
          }
        }
      }
      ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
        column-gap: 1rem;
        row-gap: 1rem;

        li {
          max-width: 100%;
          display: grid;
          place-items: center;
          a {
            color: #ededed;
            font-weight: 400;
            font-size: 1.1rem;
            color: #ededed;
            animation: 200ms color reverse
              cubic-bezier(0.175, 0.885, 0.32, 1.275);
            &:hover {
              animation: 200ms colorchange;
              background-color: #ffffff;
              color: #2e2e2e;
            }
          }
        }
      }
    }
  }
`;

export default StNavbar;
