//테스트
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import {useVisibleBlogSidebarItems} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

export default function BlogSidebarDesktop({sidebar}) {
  const sidebarData = require('../_meta.json');
  const sideitems = useVisibleBlogSidebarItems(sidebar.items);

  const getItemTitle = (permalink) => {
    console.log(sideitems);
    const item = sideitems.find((sideitem) => sideitem.permalink.replace('/whatap-docs', '') === permalink);
    return item ? item.title : permalink;
  };

  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}>
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          {sidebarData.map((category, index) => (
            <li key={index}>
              <div>
                {category.link ? (
                  <Link isNavLink to={category.link}>
                    {category.label}
                  </Link>
                ) : (
                  <span>{category.label}</span>
                )}
              </div>
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={item.className ? styles[item.className] : ''}>
                  <Link
                    isNavLink
                    to={item.link}
                    className={styles.sidebarItemLink}
                    activeClassName={styles.sidebarItemLinkActive}>
                    {getItemTitle(item.link)}
                  </Link>
                </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}