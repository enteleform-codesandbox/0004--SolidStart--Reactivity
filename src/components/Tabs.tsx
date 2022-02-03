import {
	createContext,
	createSignal,
	PropsWithChildren as Props,
	Show,
	useContext,
} from "solid-js"


//####################################################################################################################//
//##>  Components                                                                                                   ##//
//####################################################################################################################//

	export function Container(props:Props<{active:string}>){
		const store = Store()

		store.set_ActiveTab(props.active)

		return (
			<Context.Provider value={store}>
				<div class="Tab_Container">
					{props.children}
				</div>
			</Context.Provider>
		)
	}

	export function List(props:Props){
		return (
			<div class="Tab_List">
				{props.children}
			</div>
		)
	}

	export function Button(props:{id:string}){
		const {is_ActiveTab, set_ActiveTab} = useContext(Context)

		return (
			<button
				class     = "Tab_Button"
				classList = {{Active:is_ActiveTab(props.id)}}
				onClick   = {() => {set_ActiveTab(props.id)}}
			>
				{props.id}
			</button>
		)
	}

	export function Panel(props:Props<{id:string}>){
		const {is_ActiveTab}  = useContext(Context)

		return (
			<Show when={is_ActiveTab(props.id)}>
				<div class="Tab_Panel">
					{props.children}
				</div>
			</Show>
		)
	}


//####################################################################################################################//
//##>  Utilities                                                                                                    ##//
//####################################################################################################################//

	type Store = {
		activeTab:     () => string
		set_ActiveTab: (id:string) => void
		is_ActiveTab:  (id:string) => boolean
	}

	const Context = createContext<Store>()

	function Store(){
		const [activeTab, set_ActiveTab] = createSignal<string>()

		const store: Store = {
			activeTab,
			set_ActiveTab,
			is_ActiveTab: (id) => (id === activeTab()),
		}

		return store
	}
