import styled from "styled-components";
import ThreadStart from "./ThreadStart";
import ThreadContent from "./ThreadContent";
import ThreadRingConnection from "./ThreadRingConnection";

const Wrap = styled.div`
  margin: 0 var(--min-padding);
`;

interface ThreadListProps {
    contents : Post[];
}

export type Post = {
  postId: number;
  postContent: string;
}

export default function ThreadListSpecific({contents}:ThreadListProps) {
    return (
        <Wrap>
            <ThreadStart />
            {contents.map(c=>
                    <ThreadCard content={c.postContent} key={c.postId} />
                )
            }
        </Wrap>
    );
}

interface ThreadCardProps {
  content: string;
}
const ThreadCard = ({content}: ThreadCardProps) => <>
  <ThreadRingConnection />
  <ThreadContent content={content}/></>
