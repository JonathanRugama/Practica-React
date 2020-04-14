import React, {Component} from 'react'
const withFileUpload =  (WrappedComponent) => {
    return class WithFileComponent extends Component { 
        constructor (props) {
            super(props)
            this.state = {files: []}
            this.fileReader = new FileReader()

            this.addFile = this.addFile.bind(this)
            this.appendFile = this.appendFile.bind(this)
        }

        addFile(e) {
            const files = e.target.files 
            this.fileReader.readAsDataURL(filesp[0])
        }
        appendFile() {
            this.setState({
                files: [...this.state.files, this.fileReader.result]
            })
        }
        componentDidMount () {
            this.fileReader.addEventListener('load', this.appendFile)
        }
        componentWillUnmount() {
            this.fileReader.addEventListener('load', this.appendFile)
        }

        render() {
            return (
                <WrappedComponent {...this.props}
                addFile ={this.addFile}
                files = {this.state.files}/>
            )
        }
    }
} 

export default withFileUpload