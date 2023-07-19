const SomaImage: React.FC<{
  src: string,
}> = ({
  src,
}) => {
  return(<>
    <img
      src={src}
      className="h-full w-full"
    />
  </>);
}

export default SomaImage;