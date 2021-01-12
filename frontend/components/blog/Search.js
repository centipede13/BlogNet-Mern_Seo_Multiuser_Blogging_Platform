import Link from "next/link";
import { useState, useEffect } from "react";
import { listSearch } from "../../actions/blog";

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: "",
  });

  const { search, results, searched, message } = values;

  const searchSubmit = (e) => {
    e.preventDefault();
    listSearch({ search }).then((data) => {
      setValues({
        ...values,
        results: data,
        searched: true,
        message: `${data.length} blogs found`,
      });
    });
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      search: e.target.value,
      searched: false,
      results: [],
    });
  };

  const searchBlogs = (results = []) => {
    return (
      <ul className="search__list-group">
        {results.map((blog) => (
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog._id}
            className="search__link"
          >
            <a className="search__link">
              <li className="search__list-group-item" key={blog._id}>
                {blog.title}
              </li>
            </a>
          </Link>
        ))}
        {message ? (
          <li className="search__list-group-item search__list-group-item__message">
            {message}
          </li>
        ) : null}
      </ul>
      // <div className="jumbotron bg-white">
      //   {message && <p className="pt-4 text-muted font-italic">{message}</p>}

      //   {results.map((blog, i) => {
      //     return (
      //       <div key={i}>
      //         <Link href={`/blogs/${blog.slug}`}>
      //           <a className="text-primary">{blog.title}</a>
      //         </Link>
      //       </div>
      //     );
      //   })}
      // </div>
    );
  };

  const searchForm = () => (
    <form onSubmit={searchSubmit} className="search">
      {/* <div className="row">
        <div className="col-md-8">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-block btn-outline-primary" type="submit">
            Search
          </button>
        </div>
      </div> */}
      <input
        type="search"
        className="search__input-bar"
        placeholder="Search ..."
        onChange={handleChange}
      />
      {/* <div class="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </div> */}
    </form>
  );

  return (
    <form onSubmit={searchSubmit} className="search">
      <input
        type="search"
        className="search__input-bar"
        placeholder="Search ..."
        onChange={handleChange}
      />
      {searched && searchBlogs(results)}
    </form>

    // <div className="container-fluid">
    //   {searchForm()}
    //   {searched && (
    //     <div style={{ marginTop: "-120px", marginBottom: "-80px" }}>
    //       {searchBlogs(results)}
    //     </div>
    //   )}
    // </div>
  );
};

export default Search;
