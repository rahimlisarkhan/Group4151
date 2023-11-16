class Card extends React.Component {
  a = 5;

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  componentWillMount() {}

  onHandle() {
    this.setState({ movies: [1, 2, 3] });
  }

  render() {
    console.log(this.props.title);
    console.log(this.state);

    return <div></div>;
  }
}
