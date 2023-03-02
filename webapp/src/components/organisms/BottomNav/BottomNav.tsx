import React from 'react';
import { Link } from 'react-router-dom';

export default function BottomNav() {
  return (
    <footer
      style={{ height: '7%' }}
      className="flex justify-evenly items-center w-full fixed bottom-0 md:hidden bg-primaryBackground"
    >
      <div>
        <Link
          className="pi pi-fw pi-home hover:no-underline active:scale-125"
          to={'/'}
        />
        <p>Home</p>
      </div>
      <div>
        <Link
          className="pi pi-fw pi-bell hover:no-underline active:scale-125"
          to={'/item-status'}
        />
        <p>Item Status</p>
      </div>
      <div>
        <Link
          className="pi pi-fw pi-th-large hover:no-underline active:scale-125"
          to={'/work-stations'}
        />
        <p>Workstations</p>
      </div>
      <div>
        <Link
          className="pi pi-fw pi-chart-bar hover:no-underline active:scale-125"
          to={'/analytics'}
        />
        <p>Analytics</p>
      </div>
    </footer>
  );
}
