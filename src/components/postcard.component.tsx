import { CardRoot as Card, Image, CardBody, Stack, Heading, Text } from "@chakra-ui/react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export type PostCardProps = {
    postId: number;
    title: string;
    subTitle: string;
    thumbnail: string | undefined;
    createdAt: string;
}

const PostCard = (props: Partial<PostCardProps>) => {
    const navi = useNavigate();

    const routeToDetailPage = useCallback(() => {
        navi(`/detail/${props.postId}`);
    }, [navi, props.postId])

    return (
        <Card
            className="hover:cursor-pointer hover:shadow-lg duration-300"
            onClick={routeToDetailPage}>
            <CardBody>
                <Image src={props.thumbnail ?? "https://webimage.10x10.co.kr/image/basic/396/B003962650.jpg"}
                    alt="thumbnail"
                    borderRadius="lg"
                    width="300px" height="300px" />
                <Stack mt="6" gap={3}>
                    <Heading size="md">{props.title ?? "Living room Sofa"}</Heading>
                    <Text fontSize="lg">
                        {props.subTitle ?? 'this is subtitle'}
                    </Text>
                    <Text color="gray.400" fontSize="md">
                        {props.createdAt
                            ? moment(props.createdAt).fromNow()
                            : moment(new Date(2026, 9, 29, 20)).fromNow()}

                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}
export default PostCard