import React from "react";
import styles from "./Layout.module.css";

class Layout extends React.Component {
  render() {
    const {children} = this.props
    return (
      <>
        <header className={styles.header}></header>
        <main>{children}</main>
      </>
    );
  }
}

export default Layout;
