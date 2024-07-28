import ScaleLoader from "react-spinners/ScaleLoader";

const override = {
    display: 'block',
    margin: '100px auto',
};

const Spinner = ( {loading }) => {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <ScaleLoader
            css={override}
            height={20}
            width={20}
            color={"#1e293b"}
            loading={loading}
            />
            </div>
  );
}

export default Spinner