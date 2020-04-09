const Dropbox = require('dropbox').Dropbox;
const dbx = new Dropbox({ 
    clientSecret: 'yukezczsnvidyvm',
    clientId: 'g94por68micc7xi'
});

const run = async () => {
    try {
        const folders = await dbx.getAuthenticationUrl('http://localhost:3000/auth');
    } catch (error) {
        console.error('There was an error.', error);
    }
};

const options = {
    success: (files) => console.log('files selected!', files),
    multiselect: false,
    extensions: ['.mp3'],
    folderselect: true
};

const DropboxDialog = () => (
    <div className="dropbox">
       <p>To get started select the folder containing your music.</p>
       <button></button>
    </div>
);

export default DropboxDialog;