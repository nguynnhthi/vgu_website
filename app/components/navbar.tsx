import MainNavServer from './mainnavserver';
export default function NavBar() {
  return (
    <div className="h-30 flex flex-col justify-between">
      <div>
        <MainNavServer />
      </div>
    </div>
  );
}
