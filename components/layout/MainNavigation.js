import classes from './MainNavigation.module.css';
import Link from 'next/link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Honkai Impact</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Valkyrise</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Valkyrise</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
