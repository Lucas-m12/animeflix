import { useState } from 'react';
import { Collapse } from 'react-collapse';
import Parser from 'html-react-parser';
import { Saga } from 'slices/anime';
import { List } from './styles';

interface Props {
  saga: Saga
};

const Sagas = ({ saga }: Props) => {
	const [open, setOpen] = useState(false);

	function handleClick() {
		setOpen(prevOpen => !prevOpen);
	}

	return (
		<>
			<List
				onClick={handleClick}
			>
				{`${saga.titles.en} (${saga.episode_from} - ${saga.episode_to}) >`}
				<Collapse
					isOpened={open}
					style={{
						transition: 'display 0.2s ease-in'
					}}
				>
					<p>
						{Parser(saga.descriptions.en || saga.descriptions.jp)}
					</p>
				</Collapse>
			</List>
		</>
	);
};

export default Sagas;