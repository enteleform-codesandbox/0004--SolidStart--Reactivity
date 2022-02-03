import "./index.sass"
import * as Tab from "~/components/Tabs"


export default function Home() {
	return (
		<main>
			<Tab.Container active="A">

				<Tab.List>
					<Tab.Button id="A"/>
					<Tab.Button id="B"/>
				</Tab.List>

				<Tab.Panel id="A">
					<h1> A </h1>
				</Tab.Panel>

				<Tab.Panel id="B">
					<h1> B </h1>
				</Tab.Panel>

			</Tab.Container>
		</main>
	)
}
