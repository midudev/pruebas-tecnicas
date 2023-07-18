import List from '../../components/list/list';
import ReadingList from '../../components/reading.list/reading.list';
import styles from './dashboard.module.scss';

export default function DashboardPage() {
	return (
		<div className={styles.dashboardContainer}>
			<List></List>
			<ReadingList></ReadingList>
		</div>
	);
}
