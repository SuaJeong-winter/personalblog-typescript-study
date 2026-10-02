import { useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button, ButtonGroup, IconButton, Icon } from "@chakra-ui/react"
import { FaPlus } from 'react-icons/fa'

const Layout = () => {
    const navi = useNavigate();

    const routeToPublishPage = useCallback(() => {
        navi("/publish");
    }, [navi]);

    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-16 shadow-md z-999 bg-white">
                <div className="w-[1600px] h-full mx-auto box-border p-px flex justify-between items-center">
                    <h1 className="text-2xl font-thin">My blog</h1>
                    <div>
                        <ButtonGroup size="sm" variant="outline">
                            <Button>Log out</Button>
                            <IconButton aria-label="publish" onClick={routeToPublishPage}>
                                <Icon as={FaPlus} />
                            </IconButton>
                        </ButtonGroup>

                        <Button colorScheme="messenger" variant="outline" size="sm">
                            Log in
                        </Button>
                    </div>
                </div>
            </div>

            <div className="py-16">
                <Outlet />
            </div>
        </>
    )
}
export default Layout