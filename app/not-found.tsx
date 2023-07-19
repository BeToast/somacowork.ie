import Link from 'next/link'

export default function NotFound() {
  return(
    <div className="p-3">
      <p>surpirse! you got a 404!</p>
      <Link href="/">Click me to go home</Link>
    </div>
  );
}