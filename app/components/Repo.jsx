import Link from "next/link";
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa";

const fetchRepo = async (name) => {
  const response = await fetch(
    `https://api.github.com/repos/sophiesoe/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const repo = await response.json();
  return repo;
};

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  return (
    <>
      <h3 className="text-xl uppercase text-yellow-600">
        <Link href={repo.html_url} target="blank">
          {repo.name}
        </Link>
      </h3>
      <p>{repo.description || "No description"}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <FaStar /> <span>{repo.stargazers_count}</span>
        </div>
        <div className="flex gap-2 items-center">
          <FaCodeBranch /> <span>{repo.forks_count}</span>
        </div>
        <div className="flex gap-2 items-center">
          <FaEye /> <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
