import { css } from 'lit-element';
export const stylesUserProfile = css`
  .container-search-user {
    margin: 0 50px;
    display: flex;
    max-width: 600px;
    flex-direction: column;
  }

  .container-img {
    position: relative;
    z-index: 4;
    display: flex;
  }

  .container-img img {
    width: 60%;
    height: auto;
    border-radius: 50%;
  }

  .container-info {
    width: 100%;
    max-width: 600px;
    margin-bottom: 40px;
    margin-top: 10px;
  }
  .container-info a {
    text-decoration: none;
    color: black;
  }

  .container-info a:hover {
    color: #0969da;
    cursor:pointer;
  }


  .container-info p {
    margin: 5px 0;
  }

  .container-info img {
    padding-right: 5px;
  }

  span {
    font-weight: bold;
    color: black;
    text-decoration: none;
  }

  .title-job {
    font-size: 14px;
    margin: 12px 0px;
    font-weight: bold;
  }

  button {
    background: #f6f8fa;
    cursor: pointer;
    color: black;
    border: none;
    padding: 10px;
    border-radius: 5px;
    width: 80%;
    border: 1px solid rgba(27, 31, 36, 0.15);
    box-shadow: 0 1px 0 rgaba(27, 31, 36, 0.04);
  }

  button:hover {
    background-color: #f3f4f6;
    border-color: rgba(27, 31, 36, 0.15);
    cursor: pointer;
    transition-duration: 0.1s;
  }

  svg {
    padding-right: 5px;
  }

  h2 {
    margin-bottom: 0;
  }

  .mt {
    margin-top: 20px;
  }
`;
