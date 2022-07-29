import { BiRestaurant } from 'react-icons/bi';
import { ImLibrary } from 'react-icons/im';
import { IoMdCafe } from 'react-icons/io';
import { AiOutlineQuestion } from 'react-icons/ai';

export default function handleStyle(data) {
	if (
		data.category_group_code !== 'FD6' &&
		data.category_group_code !== 'AT4' &&
		data.category_group_code !== 'CE7'
	) {
		return (
			<AiOutlineQuestion
				key={Math.random()}
				className="placeInfoIcon"
				style={{ backgroundColor: '#EDF7FA' }}
			/>
		);
	} else {
		const iconArray = [
			{
				key: 'FD6',
				value: (
					<BiRestaurant
						key={Math.random()}
						className="placeInfoIcon"
						style={{ backgroundColor: '#0029fe' }}
					/>
				),
			},
			{
				key: 'AT4',
				value: (
					<ImLibrary
						key={Math.random()}
						className="placeInfoIcon"
						style={{ backgroundColor: '#039b00' }}
					/>
				),
			},
			{
				key: 'CE7',
				value: (
					<IoMdCafe
						key={Math.random()}
						className="placeInfoIcon"
						style={{ backgroundColor: '#e05836' }}
					/>
				),
			},
		];

		return iconArray.map(obj => {
			let arrayObj = {};
			arrayObj[obj.key] = obj.value;
			if (data.category_group_code == obj.key) {
				return obj.value;
			}
		});
	}
}
