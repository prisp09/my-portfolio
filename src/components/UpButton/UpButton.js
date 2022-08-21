import React from 'react';
import { StyledButton } from './UpButtonStyles';
import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const UpButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 200) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
        <>
          {showButton && (
            <StyledButton onClick={scrollToTop}>
              <IoIosArrowUp size="4rem"/>
            </StyledButton>
          )}
          {/* &#8679; is used to create the upward arrow */}
        </>
      );
};

export default UpButton;