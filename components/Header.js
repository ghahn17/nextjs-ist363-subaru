import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import Row from './Row';
import Link from 'next/link';
import Nav from './Nav'
import Container from './Container';
import styles from './header.module.scss';
import ButtonUI from './ButtonUI';

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    return <header className={styles.header}>
        <Container>
            <Row justifyContent="space-between">
                    <Link href="/">
                        <Logo />
                    </Link>
                <Nav.Desktop />
                <ButtonUI 
                    icon="menu" 
                    clickHandler={()=>{
                    setIsMobileNavOpen(true);
                }}
                />
                <AnimatePresence>
                {isMobileNavOpen && <Nav.Mobile closeHandler={()=>{
                    setIsMobileNavOpen(false);
                }} />}
                </AnimatePresence>
            </Row>
        </Container>
    </header>
}
export default Header;