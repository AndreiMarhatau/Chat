import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../../selectors/user-login.selector";
import { MenuList, MenuItem, Button, ClickAwayListener, Paper, Popper, Grow } from '@material-ui/core';
import { signOutUser } from "../../../actions/sign-out-user.action";
import { Link } from "react-router-dom";
import { routesMap } from "../../../constants/routes";

const ProfileButton: React.FC = () => {
  const user = useSelector(userSelector);

  const dispatch = useDispatch();
  const onSignOut = () => {
    dispatch(signOutUser());
  }

  const [open, setOpen] = React.useState(false);
  const anchorRef: any = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: any) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <div>
        <Button
          variant="outlined"
          color="primary"
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {user.login}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <Link to={routesMap.Profiles.route + `/${user.id}`}><MenuItem>Профиль</MenuItem></Link>
                    <a href={routesMap.SignIn.route}><MenuItem onClick={(e) => { handleClose(e); onSignOut(); }}>Выйти</MenuItem></a>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </>
  );
}

export default ProfileButton;