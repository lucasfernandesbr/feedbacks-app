import {
  Wrapper,
  Content,
  CommandContent,
  Loader,
  LoadingContent,
} from './styles'

import { LoadingProps } from './types'

export default function Loading({ commandLine, content }: LoadingProps) {
  return (
    <Wrapper>
      <Content>
        <CommandContent>{commandLine}</CommandContent>

        <Loader>
          <LoadingContent>{content}</LoadingContent>
        </Loader>
      </Content>
    </Wrapper>
  )
}
