type ButtonProps = {
  color: 'bg-purple' | 'bg-green' | 'bg-yellow' | 'bg-cyan';
  text: string;
  url: string;
  large?: boolean;
};

export default function Button({ color, text, url, large }: ButtonProps) {
  const buttonClass = `p-4 ${
    large ? 'w-48' : 'w-32'
  } md:w-48 hover:opacity-80 transition-opacity duration-200 text-[16px] rounded-lg text-primary ${color}`;
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <button type="button" className={buttonClass}>
        {text}
      </button>
    </a>
  );
}

Button.defaultProps = {
  large: false,
};
