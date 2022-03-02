import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/marystefany"}>
          marystefany
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={"/marystefany/netflix-clone"}>
          netflix-clone
        </Link>
      </Breadcrumb>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dicta?
      </p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/marystefany/netflix-clone"}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
