import React from "react";
import PropTypes from "prop-types";
import useJsonFetch from "./hooks/useJsonFetch";
import ReactLoading from "react-loading";

function DisplayHook(props) {
    const [data, loading, error] = useJsonFetch(props.url);
    const content = data ? data.status : null;

    return (
        <>
            <h3>{props.header}</h3>

            {error}
            {loading ? (
                <ReactLoading type={"bubbles"} color={"#000000"} />
            ) : (
                content
            )}
        </>
    );
}

DisplayHook.propTypes = {
    header: PropTypes.string,
    url: PropTypes.string,
};

export default DisplayHook;
