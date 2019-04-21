import Immutable from 'seamless-immutable';

let state = {
    github: {
        repos: {}
    }
}

state.github.repos = Immutable(
    {
        repos:
            [{
                name: 'gitRepo1'
            },
            {
                name: 'gitRepo2'
            }],
        single: {
            gitRepo1: {
                content:
                    [{ name: 'jsFile', path: 'jsFile.js', type: 'file' },
                    { name: 'dir1', path: 'dir1', type: 'dir' }],
                dir1: {
                    content:
                        [{ name: 'jsFile2', path: 'dir1/jsFile2.js', type: 'file' },
                        { name: 'nest1dir', path: 'dir1/nest1dir.js', type: 'dir' }],
                    nest1dir1: {
                        content:
                            [{ name: 'jsFile3', path: 'dir1/nest1dir/jsFile2.js', type: 'file' },
                            { name: 'nest2dir', path: 'dir1/nest1dir/nest2dir.js', type: 'dir' }],
                    }
                }
            }
        }
    })

export default state