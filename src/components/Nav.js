import NavItem from "../components/NavItem";
import classnames from "classnames";
import { Link, withRouter } from "react-router-dom";

export default function Nav({ scheme, dir }) {
    const dirs = {
        horizontal: "justify-center space-x-10",
        vertical: "flex-col space-y-6"
    }

    const pickedDir = dirs[dir];

    return (
        <ul className={classnames("flex", pickedDir)}>
            <NavItem scheme={scheme} href="/">Beranda</NavItem>
            <NavItem scheme={scheme} href="#">Layanan</NavItem>
            <NavItem scheme={scheme} href="#">Produk</NavItem>
            <NavItem scheme={scheme} href="#">Blog</NavItem>
            <NavItem scheme={scheme} href="/about">Tentang</NavItem>
            <NavItem scheme={scheme} href="#">Kontak</NavItem>
        </ul>
    );
}
