import { v4 as uuidv4 } from 'uuid'
import { Module } from 'vuex'
import { GlobalDataProps } from '.'

interface ComponentData {
  props: { [key: string]: any }
  id: string
  name: string
}

export interface EditorProps {
  components: ComponentData[]
  currentElement: string
}

export const testComponents: ComponentData[] = [
  { id: uuidv4(), name: 'l-text', props: { text: 'hello1', fontSize: "20px" } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello2', fontSize: "10px" } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello3', fontSize: "15px" } }
]

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: ''
  }
}

export default editor
