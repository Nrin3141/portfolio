import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import SearchIcon from "@material-ui/icons/Search"
import Chip from "@material-ui/core/Chip"

export default connectSearchBox(
  ({ refine, onFocus, collapse, focussed, focus, query }) => {
    const Input = (
      <div>
        <input
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={e => refine(e.target.value)}
          className={
            (focussed ? "focussed" : "") + (collapse ? "collapse" : "expand")
          }
        />
        <style jsx>{`
          input {
            outline: none;
            border: none;
            margin: 0;
            padding: 0;
            height: auto;
            background: inherit;
            font-size: 1em;
          }
          .expand {
            margin-left: -1.6em;
            padding-left: 1.6em;
          }
          .collapse {
            width: 0;
            margin: 0;
            padding: 0;
            color: black;
            cursor: pointer;
          }
          .focussed {
            background: white;
            cursor: text;
            width: 30vw;
          }
        `}</style>
      </div>
    )
    return (
      <form>
        {!focussed ? (
          <SearchIcon
            onClick={focus}
            style={{
              color: "black",
              fontSize: "1.5em",
            }}
          />
        ) : (
          <Chip
            style={{ background: "white" }}
            icon={<SearchIcon style={{ color: "black" }} />}
            label={Input}
          />
        )}
        <style jsx>{`
          form {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: center;
            height: 100%;
          }
        `}</style>
      </form>
    )
  }
)
