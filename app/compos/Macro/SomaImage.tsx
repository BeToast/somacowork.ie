const SomaImage: React.FC<{
  src: string,
}> = ({
  src,
}) => {
  return(<>
    <img
      src={src}
      className="h-full max-w-full object-fill"
      alt="..."
    />
  </>);
}

export default SomaImage;