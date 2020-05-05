// @ts-nocheck
import {Server, Model, Factory, hasMany, belongsTo, JSONAPISerializer} from "miragejs"
import * as f from 'faker';

export function makeServer({ environment = "test"} = {}) {
    const server = new Server({
        serializers: {
            application: JSONAPISerializer.extend({
                keyForAttribute(attr: any): any {
                    return attr;
                }
            })
        },
        models: {
            user: Model.extend({
                todos: hasMany()
            }),
            todo: Model.extend({
                user: belongsTo()
            }),
        },
        factories: {
            user: Factory.extend({
                name() {
                    return f.name.findName();
                },
                email() {
                    return f.internet.email();
                },
                password: 'secret',
            }),
            todo: Factory.extend({
                content() {
                    return f.lorem.sentence();
                },
                is_completed() {
                    return false;
                }
            })
        },
        seeds(server) {
            server.createList('user', 2).forEach((user) => {
                // @ts-ignore
                server.createList('todo', 10, {user});
            });
        },
        routes() {
            this.namespace = 'api';

            this.get('/todos');
        }
    });

    return server;
}

export default makeServer;
