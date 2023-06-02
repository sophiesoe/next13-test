import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
const fetchRepos = async () => {
  const response = await fetch("https://api.github.com/users/sophiesoe/repos", {
    next: {
      revalidate: 60,
    },
  });
  const repos = await response.json();
  return repos;
};
const ReposPage = async () => {
  const repos = await fetchRepos();
  return (
    <div>
      <h1 className="text-2xl font-semibold text-yellow-600">
        My Repositories
      </h1>
      <div>
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-slate-100 p-4 my-4 rounded-md flex flex-col gap-3 shadow-sm"
          >
            <h3 className="text-xl uppercase text-yellow-600">
              <Link href={`/code/repos/${repo.name}`}>{repo.name}</Link>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReposPage;
