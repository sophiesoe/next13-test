import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const fetchRepoDir = async (name) => {
  const response = await fetch(
    `https://api.github.com/repos/sophiesoe/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const contents = await response.json();
  return contents;
};
const RepoDir = async ({ name }) => {
  const contents = await fetchRepoDir(name);
  const dirs = contents.filter((content) => content.type === "dir");
  return (
    <>
      <h3 className="text-xl text-yellow-600 mt-4">Directories</h3>
      <div>
        {dirs.map((dir) => (
          <div key={dir.path}>
            <div className="flex items-center gap-2">
              <FaSearch />
              <p>
                <Link
                  href={`/code/repos/${name}/${dir.path}`}
                  className="underline decoration-wavy decoration-yellow-600 underline-offset-4 decoration-1 text-md"
                >
                  {dir.path}
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RepoDir;
